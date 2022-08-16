from django.urls import path
from . import views
urlpatterns = [
    #path('todos/', views.TodoList.as_view()),
    path('todos/', views.TodoListCreate.as_view()),
    path('todos/<int:pk>', views.TodoListCrud.as_view()),
    path('todos/<int:pk>/complete', views.TodoUpdateComplete.as_view()),
    path('signup/', views.signup),
    path('login/', views.login),
]   