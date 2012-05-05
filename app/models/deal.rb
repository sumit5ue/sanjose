class Deal < ActiveRecord::Base
  # attr_accessible :title, :body
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }
  has_one :pic

  class << self
    def persist(data, cookie)
      d = Deal.new
      d.title = data[:title]
      d.description = data[:description]
      d.client_id = cookie["id"].to_i
      d.save
      token = data["token"]
      pic = Pic.where(:parent_key => token).limit(1)[0]
      if pic
        pic.deal_id = d.id
        pic.save
      end
    end
  end
end
