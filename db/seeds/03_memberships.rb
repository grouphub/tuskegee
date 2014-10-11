alice = User.where(email: 'alice@congo-rails.com').first
bob = User.where(email: 'bob@congo-rails.com').first
group = Group.first

Membership.create! \
  user_id: alice.id,
  group_id: group.id,
  properties: {
    foo: 'bar'
  }

Membership.create! \
  user_id: bob.id,
  group_id: group.id,
  properties: {
    foo: 'bar'
  }

