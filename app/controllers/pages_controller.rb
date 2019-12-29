class PagesController < ApplicationController
  # protect_from_forgery except: :show
  
  def show
    respond_to do |format|
      format.js
      format.html {render 'home'}
    end
  end
end
