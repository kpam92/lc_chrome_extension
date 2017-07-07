Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :cards, only: [:index]
  end

  # root to: redirect("/api/cards")
end
