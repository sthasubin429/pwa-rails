class Post < ApplicationRecord
  belongs_to :user

  validates_presence_of :title, :content

  after_create_commit { broadcast_append_to 'posts' }
end
