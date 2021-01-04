from rest_framework import routers
from .api import ContactCreateApiView

app_name = 'contact'
router = routers.DefaultRouter()
router.register('', ContactCreateApiView, basename='contact')

urlpatterns = router.urls
