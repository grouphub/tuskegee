admin = User.first

# Group
Group.create! \
  user_id: admin,
  name: 'First Group'

