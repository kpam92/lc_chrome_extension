class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :front, null: false
      t.string :back, null: false
      t.timestamps null: false
    end
  end
end
