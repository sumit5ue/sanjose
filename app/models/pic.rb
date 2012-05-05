class Pic < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :avatar, :parent_key
  has_attached_file :avatar, 
                      :styles => { :medium => "300x300>",
                                   :thumb => "100x100>" }
end
