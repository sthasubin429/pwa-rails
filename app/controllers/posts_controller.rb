class PostsController < ApplicationController
  before_action :authenticate_user!

  # index
  def index; end
end
