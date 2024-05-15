# Generated by Django 4.1.13 on 2024-05-15 00:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('comments', '0003_alter_comment_options'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('projects', '0029_alter_task_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notifications',
            fields=[
                ('notificationID', models.AutoField(primary_key=True, serialize=False)),
                ('notification_type', models.CharField(choices=[('task_assigned', 'Task Assigned'), ('task_completed', 'Task Completed'), ('deadline_approaching', 'Deadline Approaching'), ('deadline_passed', 'Deadline Passed'), ('added_new_tags', 'Added New Tasks'), ('asked_to_join', 'Asked to Join'), ('mentioned_you', 'Mentioned You'), ('commented', 'Commented')], max_length=50)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('is_read', models.BooleanField(default=False)),
                ('comment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='comments.comment')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='projects.project')),
                ('recipient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_notifications', to=settings.AUTH_USER_MODEL)),
                ('task', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='projects.task')),
            ],
            options={
                'verbose_name_plural': 'Notifications',
                'abstract': False,
            },
        ),
    ]
