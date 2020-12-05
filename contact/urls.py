from rest_framework import routers
from .api import ContactCreateApiView

router = routers.DefaultRouter()
router.register('api/contact', ContactCreateApiView, 'contact')

urlpatterns = router.urls
