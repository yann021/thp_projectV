class HomeController < ApplicationController
  def index
    @tasks = Task.all
    @categories = Category.all
#   @java = "home.js"
  end
#ybo test
   def create
  @task = Task.new(book_params)
    if @task.save
      respond_to do |format|
        format.html { redirect_to root_path }
        format.js
      end
    end
  end

  private

  def task_params
    params.permit(:title, :deadline)
  end

end
