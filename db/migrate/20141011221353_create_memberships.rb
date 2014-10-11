class CreateMemberships < ActiveRecord::Migration
  def change
    enable_extension 'hstore'

    create_table :memberships do |t|
      t.integer :user_id
      t.integer :group_id

      t.hstore :properties

      t.timestamps
    end
  end
end
