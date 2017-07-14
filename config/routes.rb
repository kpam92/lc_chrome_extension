Rails.application.routes.draw do
  namespace :api, defaults: { format: :json }, path: '/api' do
    resources :cards, only: [:index,:show,:create]
    resources :users, only: [:index,:show,:create]
  end

  root "static_pages#root"
end
