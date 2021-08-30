from django.test import TestCase
from django.shortcuts import reverse
import json
from rest_framework import status
from rest_framework import reverse
from rest_framework.test import APITestCase
from bakery.models import Bakery


class ClientTestPost(APITestCase):


# URL is not found 
    def test_wrong_api(self):
        response = self.client.get('api/bills/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # testing URL
    def test_client_correct_api(self):
        response = self.client.get('/api/bills/')
        self.assertEquals(response.status_code, status.HTTP_200_OK)


# testing post
    def test_adding_items_correctly(self):
        data ={"title": "cake", "price": "2","billNumber": "no.7000", "created_datetime": "2022-08-28T09:08:35Z" }
        res = self.client.post("/api/bills/", data, format="json")
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)

# Testing model
    def test_adding_title_from_models(self):
        title = Bakery.objects.create(title="coffee")
        self.assertEqual(str(title), "coffee", status.HTTP_201_CREATED)


    



    

        


    

    

       

    

   






    
    










