from django.shortcuts import render

from django.views.generic import TemplateView


class RootView(TemplateView):
    template_name = 'entrypoint.html'
