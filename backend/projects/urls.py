from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views
from .views import *

router = DefaultRouter()
router.register(r'task', TaskViewSet, basename='task')

urlpatterns = [
    path('', views.projects, name='projects'),
    # path('project/', ProjectView.as_view()),
    # path('project/<int:pk>', ProjectView.as_view()),
    # path('task/', TaskView.as_view())

    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('projects/<slug:pk>/', ProjectRetrieveUpdateDestroyView.as_view(), name='project-detail'),
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('tasks/<slug:pk>/', TaskRetrieveUpdateDestroyView.as_view(), name='task-detail'),
    path('documents/', DocumentListCreateView.as_view(), name='document-list-create'),
    path('documents/<slug:pk>/', DocumentRetrieveUpdateDestroyView.as_view(), name='document-detail'),
    path('template-types/', TemplateTypeListView.as_view(), name='template-type'),
] + router.urls
