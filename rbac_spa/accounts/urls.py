from django.urls import path
from .views import RegisterView, LoginView, DashboardView, AdminView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('dashboard/', DashboardView.as_view()),
    path('admin/', AdminView.as_view()),
]