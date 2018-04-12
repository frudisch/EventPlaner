# Namespace einrichten
kubectl create ns kubeless

# Kubeless in Kubernetes starten
kubectl create -f kubeless.yaml

# Kubeless UI Anlegen
kubectl create -f ui.yaml
