json.extract! user, :id, :username

json.cards do
  json.partial! 'api/cards/card', collection: user.cards, as: :card
end
