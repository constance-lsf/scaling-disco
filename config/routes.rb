Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  root 'homes#show'

  resources :abouts, only: [:show] do
    get 'my_experiences', on: :member
    get 'my_skills', on: :member
  end

  resources :projects, only: [:index, :show]

  resource :contact, only: [:new, :create]
end
