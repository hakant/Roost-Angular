## Creating a container in a new resource group

az group create --name Roost --location westeurope
az container create --name roost-angular-test --image hakant/roost-angular --ip-address public -g Roost

## Listing and querying container information
az container list -g Roost -o table
az container log --name roost-angular-test -g Roost
az container show --name roost-angular-test -g Roost

## Removing the container and the resource group
az container delete --name roost-angular-test -g Roost
az group delete --name Roost --location westeurope


