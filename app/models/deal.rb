class Deal < ActiveRecord::Base
  # attr_accessible :title, :body
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }
end
