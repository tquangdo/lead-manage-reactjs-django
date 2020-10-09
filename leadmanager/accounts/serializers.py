from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# IN:
# Headers > Authorization:
# Token xxx
# OUT: tương ứng user đang login có token = "xxx"
# {
#     "id": 2,
#     "username": "user2",
#     "email": "user2@email.com"
# }
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# IN:
# {
#     "username": "user3",
#     "email": "user3@email.com",
#     "password": "123456"
# }
# OUT:
# {
#     "user": {
#         "id": 3,
#         "username": "user3",
#         "email": "user3@email.com"
#     },
#     "token": "d41679179988574e69618771879e12519a88f900d1ac487c5cbfe8e5caa2fb76"
# }
class RegisterSerializer(serializers.ModelSerializer):
    # dùng "ModelSerializer" vì phức tạp cần model
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):  # create() là fix name
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])

        return user


# IN:
# {
#     "username": "user3",
#     "password": "123456"
# }
# OUT:
# {
#     "user": {
#         "id": 3,
#         "username": "user3",
#         "email": "user3@email.com"
#     },
#     "token": "a31ea9c0d8905a3ac6600192f19f3d11a73045b7263ae847a9a5987d4cfad98d"
# }
class LoginSerializer(serializers.Serializer):
    # dùng "Serializer" vì đơn giản KO cần model
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):  # validate() là fix name
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
