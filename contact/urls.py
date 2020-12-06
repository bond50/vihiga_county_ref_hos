from rest_framework import routers
from .api import ContactCreateApiView

router = routers.DefaultRouter()
router.register('contact', ContactCreateApiView)

urlpatterns = router.urls
