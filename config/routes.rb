Rails.application.routes.draw do
  devise_for :admins, skip: [:registrations]
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # Defines the root path route ("/")
  # root "articles#index"

  authenticated :user do
    root 'posts#index'
  end

  resources :posts

  unauthenticated :account do
    root to: redirect('/users/sign_in'), as: :unauthenticated_root
  end

  get 'home', to: redirect('/')
end
