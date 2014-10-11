Rails.application.routes.draw do
  root :to => "home#index"

  resources :groups
  resources :roles
  resources :registrations
  resources :applicants
  resources :memberships
  resources :users
end
