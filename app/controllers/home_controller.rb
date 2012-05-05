class HomeController < ApplicationController
  def index
  end

  def login
    state = Client.validate params["loginData"]
    if (state)
      cookies['id'] = state.id
      render :json => {"status" => 200}
    else
      cookies['id'] = false
      render :status => 403
    end
  end

  def register
    Client.persit params["data"]
    render :json => {:status => 200}
  end

  def deal
    Deal.persist(params, cookies)
    render :json => {:status => 200}
  end

  def image
    puts params
    pic = Pic.new
    pic.avatar = params["files"][0]
    pic.parent_key = params["token"]
    pic.save
    render :json => {:src => pic.avatar.url(:thumb)}
  end

  def token
    render :json => {:token => PerishableToken.generate(1.hour)}
  end
end
