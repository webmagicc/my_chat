from django import forms
from django.contrib.auth import get_user_model, authenticate


class SignupForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'class': 'form-control',
                                                     'placeholder': 'User name'})
        self.fields['email'].widget.attrs.update({'class': 'form-control',
                                                  'placeholder': 'Email'})
        self.fields['password'].widget.attrs.update({'class': 'form-control',
                                                     'placeholder': 'Password'})
    username = forms.CharField(max_length=30, min_length=4)
    email = forms.EmailField()
    password = forms.CharField(max_length=20, min_length=8, widget=forms.PasswordInput())

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get("username")
        email = cleaned_data.get("email")
        user = get_user_model().objects.filter(username=username).first()
        if user:
            raise forms.ValidationError("User with this username already exist")
        user = get_user_model().objects.filter(email=email).first()
        if user:
            raise forms.ValidationError("User with this email already exist")
        return cleaned_data


class LoginForm(forms.Form):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'class': 'form-control',
                                                     'placeholder': 'User name'})
        self.fields['password'].widget.attrs.update({'class': 'form-control',
                                                     'placeholder': 'Password'})
    username = forms.CharField(max_length=30, min_length=4)
    password = forms.CharField(max_length=20, min_length=8, widget=forms.PasswordInput())

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get("username")
        password = cleaned_data.get("password")
        user = authenticate(username=username, password=password)
        if not user:
            raise forms.ValidationError("Incorrect username or password")
        return cleaned_data
