# Generated by Django 2.0.3 on 2019-04-23 01:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('goals', '0003_auto_20190422_1825'),
    ]

    operations = [
        migrations.CreateModel(
            name='Goal_Progress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=0)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('goal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='progress', to='goals.Cumulative_Goal')),
            ],
        ),
    ]