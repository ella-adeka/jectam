# Generated by Django 4.1.13 on 2024-03-28 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0017_alter_document_options_document_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='category',
            field=models.CharField(blank=True, choices=[('Backend Devt', 'Backend Devt'), ('Feature Devt', 'Feature Devt'), ('UI Design', 'UI Design')], max_length=20, null=True),
        ),
    ]
