# Docker - Prepare
sudo apt update
#sudo apt upgrade -y
# Source: https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository
# Install packages to allow apt to use a repository over HTTPS:
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
# Add Docker’s official GPG key:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Docker - Install
sudo apt-get update
sudo apt-get install docker-ce -y

# Docker - Install docker-compose
# https://docs.docker.com/compose/install/#install-compose
# GET LATEST VERSION NUMBER FROM https://github.com/docker/compose/releases
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
# Install command completion for the bash and zsh shell.
# ...
# Test the installation.
docker-compose --version

# Docker - Manage Docker as a non-root user
sudo groupadd docker
sudo usermod -aG docker $USER

# If you initially ran Docker CLI commands using sudo before adding your user to the docker group.
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "$HOME/.docker" -R

# Verify that you can run docker containers
sudo docker run hello-world
