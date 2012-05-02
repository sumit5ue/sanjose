class HomeController < ApplicationController
  def index
  end

  def login
    render :json => {"status" => 200}
  end

  def register
    render :json => {"status" => 200}
  end
end
