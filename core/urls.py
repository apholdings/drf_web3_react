from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/user/', include('apps.user.urls')),

    # path('api/category/', include('apps.category.urls')),
    # path('api/courses/', include('apps.courses.urls')),
    # path('api/blog/', include('apps.blog.urls')),
    # path('api/products/', include('apps.product.urls')),
    # path('api/reviews/', include('apps.reviews.urls')),
    # path('api/wishlist/', include('apps.wishlist.urls')),
    # path('api/cart/', include('apps.cart.urls')),
    # path('api/shipping/', include('apps.shipping.urls')),
    # path('api/orders/', include('apps.orders.urls')),
    # path('api/coupons/', include('apps.coupons.urls')),
    # path('api/payment/', include('apps.payment.urls')),

    
    path('admin/', admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]