class Membership < ActiveRecord::Base
  belongs_to :user
  belongs_to :group

  def complete_json
    {
      user: self.user.as_json,
      group: self.group.as_json,
    }.reverse_merge(self.as_json)
  end
end
