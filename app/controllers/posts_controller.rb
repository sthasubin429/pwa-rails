class PostsController < ApplicationController
  before_action :authenticate_user!

  # index
  def index
    @posts = Post.all.order(created_at: :desc)
  end
end
