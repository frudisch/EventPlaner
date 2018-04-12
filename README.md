# Event Planer using Kubeless and serverless
## General

## Minikube Setup

```
minikube start
```

```
minikube addons enable ingress
```

## Kubeless Setup

```
kubectl create -f ./k8s/kubeless/kubeless.yaml
```

## Deployment Kubeless Funktionen

```
cd event-service

serverless deploy
```
