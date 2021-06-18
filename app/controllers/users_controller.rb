class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    @data = @users.map do |k, v|
      k.attributes.except("password_digest", "created_at", "updated_at", "address")
    end
    render json: @data
  end

  # GET /users/1
  def show
    render json: @user.attributes.except("password_digest", "created_at", "updated_at", "address", "email")
  end

  # POST /users
  def create
    @user = User.new(user_params)
    # render json: @user
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  # GET /users/1/items
  def user_items
    @user = User.find(params[:id])

    render json: @user.items
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :address, :password)
    end
end
