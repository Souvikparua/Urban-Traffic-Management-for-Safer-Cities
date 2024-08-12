# Generated by Django 5.0.3 on 2024-03-18 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='organization',
            name='deleted_at',
        ),
        migrations.RemoveField(
            model_name='organization',
            name='is_deleted',
        ),
        migrations.AlterField(
            model_name='organization',
            name='payment_method',
            field=models.CharField(choices=[('credit_card', 'Credit Card'), ('bank_transfer', 'Bank Transfer'), ('paypal', 'PayPal')], max_length=50),
        ),
        migrations.AlterField(
            model_name='organization',
            name='subscription_plan',
            field=models.CharField(choices=[('basic', 'Basic Plan'), ('standard', 'Standard Plan'), ('premium', 'Premium Plan')], max_length=50),
        ),
    ]
