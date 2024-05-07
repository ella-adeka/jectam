# Generated by Django 4.1.13 on 2024-04-11 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_customuser_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.CharField(choices=[('Default', 'Default'), ('Project Manager', 'Project Manager'), ('Product Manager', 'Product Manager'), ('Frontend Engineer', 'Frontend Engineer'), ('Backend Engineer', 'Backend Engineer'), ('Designer', 'Designer'), ('QA Tester', 'QA Tester'), ('DevOps Engineer', 'DevOps Engineer')], default='Default', max_length=20),
        ),
    ]
