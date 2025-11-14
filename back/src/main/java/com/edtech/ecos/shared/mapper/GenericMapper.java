package com.edtech.ecos.shared.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

/**
 * Use this generic mapper to extend with your entity/dto mapping
 *
 * @param <E> Entity
 * @param <D> dto
 */
public interface GenericMapper<E, D> {

    /**
     * Mapping to DTO
     * @param entity entity from db
     * @return dto for response
     */
    D toDTO(E entity);

    /**
     * Mapping to Entity
     * @param dto DTO from request
     * @return dto conversion to entity
     */
    E toEntity(D dto);

    /**
     *
     * @param entities list of entities
     * @return list of the same entity but mapped in dto
     */
    List<D> toDTOList(List<E> entities);

    /**
     * Usage when updating entity, we might have some null properties so we ignore with this method
     * @param entity target conversion
     * @param dto request dto
     */
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    void update(@MappingTarget E entity, D dto);
}
