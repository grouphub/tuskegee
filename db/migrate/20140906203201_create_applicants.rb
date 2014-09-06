class CreateApplicants < ActiveRecord::Migration
  def change
    create_table :applicants do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :ssn
      t.string :group
      t.string :group_id
      t.string :address_1
      t.string :string
      t.string :address_2
      t.string :city
      t.string :state
      t.integer :zip
      t.string :home_phone
      t.string :date_of_birth
      t.boolean :gender

      t.timestamps
    end
  end
end
