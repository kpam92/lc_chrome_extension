class User < ActiveRecord::Base

  has_many(:cards,
  foreign_key: :author_id,
  class_name: 'Card')
end
