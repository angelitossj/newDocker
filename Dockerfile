# Define la imagen base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/dockerserver

# Copia los archivos de la aplicación al directorio de trabajo del contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# RUN npm run dev

# Expone el puerto en el que el contenedor escuchará las solicitudes
EXPOSE 3000


