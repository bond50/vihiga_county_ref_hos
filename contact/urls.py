from rest_framework import routers
from .api import ContactCreateApiView

app_name = 'contact'
router = routers.DefaultRouter()
router.register('contact', ContactCreateApiView)

urlpatterns = router.urls
