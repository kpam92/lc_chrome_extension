Rails.application.routes.draw do
  namespace :api, defaults: { format: :json }, path: '/api' do
    resources :cards, only: [:index]
  end

  root "static_pages#root"
end
