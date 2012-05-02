class CreateDeals < ActiveRecord::Migration
  def change
    create_table :deals do |t|
      t.string :title
      t.string :description
      t.string :image
      t.datetime :start_date
      t.datetime :end_date
      t.has_attached_file :avatar
      t.integer :client_id
    end
    connection.execute("ALTER TABLE deals ADD FOREIGN KEY (client_id) REFERENCES clients (id)")
  end
end
