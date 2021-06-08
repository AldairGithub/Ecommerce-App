class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy, :item_categories]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_category]

  # GET /items
  def index
    @items = Item.all

    render json: @items
  end

  # GET /items/1
  def show
    render json: @item
  end

  # POST /items
  def create
    @item = Item.new(item_params)
    @item.user = @current_user

    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  # PUT /categories/:id/item/:item_id 
  def add_category
    @item = Item.find(params[:id])
    @category = Category.find(params[:category_id])

    @item.categories << @category

    render json: @item, include: :categories
  end
  
  # GET /items/:id/categories
  def item_categories
    render json: @item, include: :categories
  end 

  # GET /items/:supplier_id/supplier_items
  def supplier_items
    @supplier_items = Item.where(user_id: params[:supplier_id])
    render json: @supplier_items
  end

  # GET /items/:category_id/categories_items
  # returns items based on category
  def categories_items
    @items = Item.includes(:categories).where(categories: { id: params[:category_id]})
    render json: @items, include: :categories
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      params.require(:item).permit(:name, :price, :img_url, :user_id)
    end
end
