class MembershipsController < ApplicationController
  # TODO: Add devise

  def index
    group_id = params[:group_id]

    render json: Membership.where(group_id: group_id).map(&:complete_json)
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
      membership: membership.complete_json
    }
  end

  def delete
    user_id = params[:user_id]
    group_id = params[:group_id]

    Membership.where(group_id: group_id, user_id: user_id).destroy_all

    render json: {}
  end
end
