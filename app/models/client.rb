class Client < ActiveRecord::Base
  attr_accessible :username, :password, :city, :state, :zip, :address
  has_many :deals
  class << self

    def persit(data)
      create(
        {
          :username => data["username"],
          :password => data["password"],
          :address => data["address"],
          :city => data["city"],
          :state => data["state"],
          :zip => data["zip"]
        }
      )
    end

    def validate(data)
      client = Client.where(:username => data["userName"]).limit(1)[0]
      if client.password === data["password"]
        client
      else
        false
      end
    end

  end
end
