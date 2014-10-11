class MembersController < ApplicationController
  def index
    # TODO: Add devise

    group_id = params[:group_id]

    render json: Membership.where(group_id: group_id)
  end

  def create
    user_id = params[:user_id]
    group_id = params[:group_id]
    properties = params[:properties]
    membership = Membership.create \
      user_id: user_id,
      group_id: group_id,
      properties: properties

    render json: {
      membership: membership.to_json
    }
  end
end
