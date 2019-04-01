Rails.application.routes.draw do
  devise_for :users do
  	resources :avatars, only: [:create]
  end
  resources :events
  resources :attendances
  resources :charges

  root to: 'events#index'

  resources :users, only: [:show, :index] do
# yb test Active strorage
    resources :avatars, only: [:create]
  end

# yb test dashbord admin
  namespace :admin do
        resources :users
        resources :attendances
        resources :events
  end

end
