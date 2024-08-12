from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=100)
    installation_service = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    address = models.TextField()
    SUBSCRIPTION_PLAN_CHOICES = [
        ('none', 'None'),
        ('basic', 'Basic Plan'),
        ('standard', 'Standard Plan'),
        ('premium', 'Premium Plan'),
        # Add more options as needed
    ]
    subscription_plan = models.CharField(max_length=50, choices=SUBSCRIPTION_PLAN_CHOICES)
    pricing = models.DecimalField(max_digits=10, decimal_places=2)
    vehicle_count = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    # Additional Fields
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=15)
    city = models.CharField(max_length=50)
    state_province = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=20)
    subscription_start_date = models.DateField(null=True, blank=True)
    subscription_end_date = models.DateField(null=True, blank=True)
    billing_address = models.TextField()

    PAYMENT_METHOD_CHOICES = [
        ('credit_card', 'Credit Card'),
        ('bank_transfer', 'Bank Transfer'),
        ('paypal', 'PayPal'),
        ('stripe', 'Stripe'),
        ('cash', 'Cash'),
        ('check', 'Check'),
        ('other', 'Other'),
        # Add more options as needed
    ]
    payment_method = models.CharField(max_length=50, choices=PAYMENT_METHOD_CHOICES)

    last_service_date = models.DateField(null=True, blank=True)
    next_service_date = models.DateField(null=True, blank=True)
    
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]
    
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='active')
    
    notes = models.TextField(blank=True)

    

    # Define any other fields as needed based on your requirements

    class Meta:
        db_table = 'organizations'
        verbose_name = 'Organization'
        verbose_name_plural = 'Organizations'
        ordering = ['-created_at']

    def __str__(self):
        return self.name
# Path: ClearPath/Administration_Backend/organizations/serializers.py